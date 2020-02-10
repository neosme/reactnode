import React, {Component} from 'react';
import {TableView} from "./components/table/tableView";
import {LanguageSwitch} from "./components/languageSwitch/languageSwitch";
import {IntlProvider} from 'react-intl';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    };
  }

  onUpdateLanguage = (value) => {
    this.setState({
      lang: value
    })
  }

  render() {
    const {lang} = this.state;
    return (
      <IntlProvider locale={lang} 
                    key={lang}
                    defaultLocale='en'>
          <LanguageSwitch onUpdate={this.onUpdateLanguage}/>
          <TableView />
      </IntlProvider>
    );
  }
}

export default App;
