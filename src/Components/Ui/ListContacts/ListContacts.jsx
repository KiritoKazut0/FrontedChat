import './ListContacts.css';
import Table from '@mui/joy/Table';
import Box from '@mui/material/Box';
import DeleteModal from '../DeleteModal/DeleteModal';
import FormUpdate from '../FormUpdate/FormUpdate';

export default function ListContacts({ 
    contacts,
    handlerDeleteContact,
    handlerEditName
}) {
  return (
    <Box className='container-table'>
      <Table hoverRow>
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Name</th>
            <th>Country Code</th>
            <th>Phone</th>
            <th style={{ width: '10%' }}></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.countryCode}</td>
              <td>{contact.phone}</td>
              <td>
                <FormUpdate handlerEdit={handlerEditName} id={contact._id}/>
              </td>
              <td>
                <DeleteModal handlerDelete={handlerDeleteContact} id={contact._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}
