import { render, fireEvent, screen } from '@testing-library/react';
import PhotoItemComponent from './PhotoItemComponent';
import fallbackImage from '../assets/fallback.png';

describe('PhotoItemComponent', () => {
  const itemMock = { id: 'photo_1', image: 'testImage.jpg', title: 'Test Image', index: 1 };

  it('renders without crashing', () => {
    render(<PhotoItemComponent item={itemMock} />);
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const handleClickMock = jest.fn();
    render(<PhotoItemComponent item={itemMock} handleClick={handleClickMock} />);
    fireEvent.click(screen.getByAltText('Test Image'));
    expect(handleClickMock).toHaveBeenCalledWith(itemMock);
  });

  it('displays fallback image on error', () => {
    render(<PhotoItemComponent item={itemMock} />);
    fireEvent.error(screen.getByAltText('Test Image'));
    expect(screen.getByAltText('Test Image')).toHaveAttribute('src', fallbackImage);
  });

  it('applies selected class when isSelected is true', () => {
    render(<PhotoItemComponent item={itemMock} isSelected />);
    expect(screen.getByTestId('photo-item')).toHaveClass('selected');
  });
});
