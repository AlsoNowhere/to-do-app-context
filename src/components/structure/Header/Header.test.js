import { render } from '@testing-library/react';
import Header from './Header';

test('Renders successfully', () => {
    const { getByText } = render(<Header />);
    getByText("4C Platform Frontend Technical Test");
});
