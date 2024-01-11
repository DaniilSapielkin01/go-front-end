import { Input as Inp, InputProps } from '@mui/material'
import stl from './index.module.scss'

interface ButtonDefaultProps extends InputProps {}

const Input: React.FC<ButtonDefaultProps> = ({ ...props }) => (
  <Inp className={stl.input} {...props} />
)

export default Input
