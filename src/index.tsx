import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
