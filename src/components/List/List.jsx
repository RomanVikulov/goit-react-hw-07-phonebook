import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/Item/Item';
import { List, Notify } from './List.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}

      {isLoading && !error && <Notify>Loading contacts...</Notify>}
      {error && <Notify>{error}</Notify>}
import { ContactItem } from 'components/Item/Item';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './List.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.length === 0 && <div>No contacts</div>}
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
      {contacts.length === 0 && !error && !isLoading && (
        <Notify>No contacts</Notify>
      )}
    </List>
  );
};