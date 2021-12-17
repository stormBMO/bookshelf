import styled from 'styled-components'
import { borders } from '../../theme/constant'

export const TextInput = styled('input')({
  borderRadius: '1rem',
  border: borders.main,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  height: '100%',
  width: '100%',
})
