import { ControllerProps } from "react-hook-form"

export type OmittedControllerProps = Omit<ControllerProps, 'render'>
interface Props extends OmittedControllerProps {
	render: (params: Pasrans) => JSX.Elemen; t
}

const Field = (prps: Props) => {

}

export default Field