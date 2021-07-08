import { render } from "@testing-library/react";
import Listar from './Listarmedico';

test('renders learn react link', () => {
    render(<Listar />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});