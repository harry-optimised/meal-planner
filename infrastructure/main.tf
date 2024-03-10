provider "aws" {
  region  = "eu-west-2"
  profile = "personal"
}

terraform {
  backend "s3" {
    bucket         = "infrastructure.harrysprojects.com"
    key            = "meal-planner.tfstate"      
    region         = "eu-west-2"
    profile        = "personal"
    encrypt        = true
  }
}

locals {
  www_bucket_name = "meal-planner.harrysprojects.com"
  s3_origin_id   = "meal-planner.harrysprojects.com-origin"
  s3_domain_name = "meal-planner.harrysprojects.com.s3-website.eu-west-2.amazonaws.com"
}

resource "aws_s3_bucket" "www" {
  bucket = local.www_bucket_name
}

resource "aws_s3_bucket_website_configuration" "website-configuration" {
  bucket = aws_s3_bucket.www.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

  routing_rule {
    condition {
      key_prefix_equals = "docs/"
    }
    redirect {
      replace_key_prefix_with = "documents/"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "bucket_access_block" {
  bucket = aws_s3_bucket.www.id

  block_public_acls   = false
  block_public_policy = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.www.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action = [
          "s3:GetObject"
        ]
        Resource = [
          "${aws_s3_bucket.www.arn}/*"
        ]
      }
    ]
  })
}


resource "aws_cloudfront_distribution" "cdn" {
  
  enabled = true
  aliases = [local.www_bucket_name]
  
  origin {
    origin_id                = local.s3_origin_id
    domain_name              = local.s3_domain_name
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:664735937512:certificate/c35acf0f-c6dd-4790-ab8f-26fc380c331b"
    ssl_support_method  = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }

  default_cache_behavior {
    
    target_origin_id = local.s3_origin_id
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  price_class = "PriceClass_200"
  
}

resource "aws_route53_record" "root_domain" {
  zone_id = "Z0550305316EWCGRX5L4K"  # harrysprojects.com
  name = local.www_bucket_name
  type = "A"

  alias {
    name = "${aws_cloudfront_distribution.cdn.domain_name}"
    zone_id = "${aws_cloudfront_distribution.cdn.hosted_zone_id}"
    evaluate_target_health = false
  }
}