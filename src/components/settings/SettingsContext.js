import PropTypes from 'prop-types';
import { createContext, useEffect, useContext, useMemo, useCallback } from 'react';
// hooks
import useLocalStorage from '../../hooks/useLocalStorage';
//
import { defaultSettings } from './config';

const initialState = {
    ...defaultSettings,
    //Mode
    onChangeMode: () => {},
};

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

SettingsProvider.propTypes = {
    children: PropTypes.node,
};

export function SettingsProvider({children}){

}