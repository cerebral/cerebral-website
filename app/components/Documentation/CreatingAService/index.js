import React from 'react';

import Markdown from '../../Markdown';
import NextDocument from '../../NextDocument';
import GithubCode from '../../GithubCode';

export default function Advanced() {
  return (
    <div>
      <Markdown filename="doc_creating_a_service.md" />
      <GithubCode url="https://github.com/cerebral/cerebral-website-tutorial-advanced/blob/master/src/modules/LocalStorage/index.js" />
      <Markdown filename="doc_creating_a_service_2.md" />
      <GithubCode url="https://github.com/cerebral/cerebral-website-tutorial-advanced/blob/master/src/modules/App/actions/storeItemsInLocalStorage.js" />
      <Markdown filename="doc_creating_a_service_3.md" />
      <GithubCode url="https://github.com/cerebral/cerebral-website-tutorial-advanced/blob/master/src/modules/App/signals/newItemTitleSubmitted.js" />
      <Markdown filename="doc_creating_a_service_4.md" />
      <NextDocument name="enhancing_the_context" />
    </div>
  );
}
