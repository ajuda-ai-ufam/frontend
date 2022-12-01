import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import React from 'react';
import { StyledTextField } from './styles';

type Props = {
  inputRef?: React.Ref<HTMLInputElement | undefined>;
  search?: string;
  placeholder?: string;
  handleSearch(e: React.SyntheticEvent<EventTarget>): void;
  handleSearchChange?(e: React.ChangeEvent<HTMLInputElement>): void;
};

const SearchField = ({
  inputRef,
  placeholder,
  search,
  handleSearch,
  handleSearchChange,
}: Props) => (
  <form onSubmit={handleSearch}>
    <StyledTextField
      value={search}
      onChange={handleSearchChange}
      inputRef={inputRef}
      placeholder={placeholder || ''}
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
    />
  </form>
);

export default SearchField;
