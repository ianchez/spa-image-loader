import { parsePhotoItem } from './index';
import { PhotoItem } from '../types';

describe('parsePhotoItem', () => {
  it('should parse a valid photo item correctly', () => {
    const input = ['photo_1', {
      title: 'Sunset',
      description: 'A beautiful sunset',
      image: 'sunset.jpg',
      index: '1'
    }];
    const expected: PhotoItem = {
      id: 'photo_1',
      title: 'Sunset',
      description: 'A beautiful sunset',
      image: 'sunset.jpg',
      index: 1,
    };

    expect(parsePhotoItem(input)).toEqual(expected);
  });

  it('should handle missing optional fields by providing default values', () => {
    const input = ['456', { title: 'Sunrise' }];
    const expected: PhotoItem = {
      id: '456',
      title: 'Sunrise',
      description: '',
      image: '',
      index: 0,
    };

    expect(parsePhotoItem(input)).toEqual(expected);
  });

  it('should convert index to integer if it is provided as a string', () => {
    const input = ['789', {
      title: 'Mountain',
      description: 'A high mountain',
      image: 'mountain.jpg',
      index: '2'
    }];
    const expected: PhotoItem = {
      id: '789',
      title: 'Mountain',
      description: 'A high mountain',
      image: 'mountain.jpg',
      index: 2,
    };

    expect(parsePhotoItem(input)).toEqual(expected);
  });

  it('should provide empty string for missing title, description, and image', () => {
    const input = ['101', {}];
    const expected: PhotoItem = {
      id: '101',
      title: '',
      description: '',
      image: '',
      index: 0,
    };

    expect(parsePhotoItem(input)).toEqual(expected);
  });
});