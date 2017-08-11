import React from 'react';
import Footer from '../Footer/Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import {Page, Layout, Card} from '@shopify/polaris';

const App = () => (
  <Page title="Todo list">
    <Layout>
      <Layout.Section>
        <Card>
          <Card.Section>
            <AddTodo />
          </Card.Section>
          <VisibleTodoList />
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Footer />
      </Layout.Section>
    </Layout>
  </Page>
);

export default App;
