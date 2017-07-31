import React from 'react';
import Footer from '../Footer/Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import {Page} from '@shopify/polaris';

const App = () => (
  <Page title="Todo list">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Page>
);

export default App;
