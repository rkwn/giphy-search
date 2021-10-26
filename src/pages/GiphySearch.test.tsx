import { render, screen, fireEvent } from '@testing-library/react';
import SearchPage from './SearchPage';

describe('Search Page', () => {
  it('should render input element', () => {
    render(<SearchPage />);

    const inputElement = screen.getByRole('searchbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into searchbox', () => {
    render(<SearchPage />);

    const inputElement = screen.getByRole('searchbox');
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'apple' } });
    expect(inputElement.value).toBe('apple');
  });
});
