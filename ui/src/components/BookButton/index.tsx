import { Card, Pane } from 'evergreen-ui';
import React from 'react';

const bookCoverMap = {
  yellow: '/assets/roasting-tin.jpg',
  blue: '/assets/quick-roasting-tin.jpg',
  green: '/assets/green-roasting-tin.jpg',
  red: '/assets/around-the-world.jpg'
};

interface BookButtonProps {
  color: 'yellow' | 'blue' | 'green' | 'red';
  selected: boolean;
  onClick: () => void;
}

function BookButton({ color, selected, onClick }: BookButtonProps) {
  const bookCover = bookCoverMap[color];
  return (
    <Card elevation={1} userSelect="none" onClick={onClick} opacity={selected ? 1 : 0.2}>
      <img src={bookCover} alt="Description" width={100} height={150} onDragStart={(e) => e.preventDefault()} />
    </Card>
  );
}

export default BookButton;
