
import { fireEvent, render, screen } from '../../test-utils';
import Cita from './Citas';


describe('Tests of the quoteSlice Component', () => {
    test('quoteSlice component renders correctly', () => {

        render(<Cita />)
        const component = screen.getByText('No se encontro ninguna cita')

        expect(component).toBeInTheDocument()

    });

    test('render a random quote by a character', async () => {
        render(<Cita />)

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
        fireEvent.change(input, { target: { value: 'Lisa' } })
        const button = screen.getByRole('button', { name: "Obtener Cita" })
        fireEvent.click(button)



        expect(input).toHaveDisplayValue("Lisa");
        expect(await screen.findByText("These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will."))
            .toBeInTheDocument()


    });


    test('render a random quote without an input', async () => {

        render(<Cita />)


        const button = screen.getByRole('button', { name: "Cita aleatoria" })
        fireEvent.click(button)

        expect((await screen.findAllByText("CARGANDO...")).length).toBeGreaterThan(0);


    });

    test('render an error message when enter an invalid input', async () => {

        render(<Cita />)

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')
        fireEvent.change(input, { target: { value: '2524' } })
        const button = screen.getByRole('button', { name: "Obtener Cita" })
        fireEvent.click(button)
        expect((await screen.findAllByText("Por favor ingrese un nombre válido")).length).toBeGreaterThan(0);



    });
});