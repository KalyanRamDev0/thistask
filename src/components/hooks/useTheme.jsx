import { useContext } from 'react'
import { ThemeContext } from '../../../src/assets/Contexts/ThemeContext'

export const useTheme = () => useContext(ThemeContext)