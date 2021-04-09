import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Icon from './components/Icon/Icon'
import { 
  Button,
  Checkbox,
  ClickableListItem,
  CodeInput,
  ConfirmationModal,
  CountryDropdown,
  Dropdown,
  Header,
  FloatingActionButton,
  FloatingWindow,
  Footer,
  HamburgerMenu,
  Icon,
  Illustration,
  LanguageDropdown
 } from '@yembo/yemblocks-core';
import '@yembo/yemblocks-core/dist/index.scss'; 


export interface AppProps {
  name?: string
}

export const App = (props: AppProps): JSX.Element => {
  const { name } = props 
  const [ selected, setSelected ] = useState<string>('Option 1');
  const [ selectedCountry, setSelectedCountry ] = useState<string>('')

  const dropdownOptions = [
    {
      name: 'Option 1',
      onClick: () => setSelected('Option 1'),
      isSelected: selected === 'Option 1',
    },
    {
      name: 'Option 2',
      onClick: () => setSelected('Option 2'),
      isSelected: selected === 'Option 2',
    },
    {
      name: 'Option 3',
      onClick: () => setSelected('Option 3'),
      isSelected: selected === 'Option 3',
    },
  ];
  const dropdownProps = {
    label: 'Dropdown Label',
    placeholder: 'Select Option',
    value: selected,
    options: dropdownOptions,
  };
  const codeInputProps = {
    name: 'code-input', 
    length: 6, 
    isValid: false, 
    errorMessage: 'Invalid Input', 
    defaultValue: '000000'
  }
  const floatingWindowProps = {
    width: 200,
    height: 100,
    minWidth: 200,
    minHeight: 100,
    maxWidth: 300,
    maxHeight: 150,
  }

  const burgerItems = [
    { name: 'Thing 1', onClick: () => {} },
    { name: 'Thing 2', onClick: () => {} },
    { name: 'Thing 3', onClick: () => {} },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header text='Yemblocks Core Sandbox'></Header>
      </header>
      <div className='test-area'>
        <div className='list-title'>
          <h1>Yemblocks Components Menu</h1>
        </div>
        <div className='test-area-col'>
          <small>Button</small>
          <Button text='Hello there' onClick={()=> console.log('hi')}/>
          <br />
          <small>Dropdown</small>
          <Dropdown {...dropdownProps} menuPortalTarget={null}/>
          <br/>
          <small>Checkbox</small>
          <Checkbox />
          <br/>
          <small>Country Dropdown - Not functional in this app due to Menu Portal Target</small>
          <CountryDropdown onSelect={(e)=> setSelectedCountry(e.label)} selectedCountry={selectedCountry}/>
          <br/>
          <small>Footer</small>
          <Footer/>
          <br/>
          <small>HamburgerMenu - Not functional in this app due to Menu Portal Target</small>
          <div className='dark-background'>
            <HamburgerMenu items={burgerItems}/>
          </div>
          <br/>
          <small>Icon (original)</small>
          <Icon name='bathroom' stroke='blue'/>
          <br/>
          <small>Illustration</small>
          <Illustration type='cat-sleeping'/>
        </div>
        <div className='test-area-col'>
          <small>Clickable List Item</small>
          <ClickableListItem onClick={(e)=> console.log("clicked")}text="Yemblox rulez" arrow={true}/>
          <br/>
          <small>Code input</small>
          <CodeInput onChange={(e)=> console.log(e)}{...codeInputProps}/>
          <br/>
          <small>Confirmation Modal</small>
          <ConfirmationModal message="😳 I can't believe it's not _components" action="It is" altAction="It isn't"/>
          <br/>
          <small>FloatingActionButton</small>
          <div className='btn-row'>
            <FloatingActionButton buttonType='dial-number' buttonNumber='4'/>
            <FloatingActionButton buttonType='chat'/>
            <FloatingActionButton buttonType='answer'/>
            <FloatingActionButton buttonType='hangup'/>
            <FloatingActionButton buttonType='camera'/>
          </div>
          <br/>
          <small>Floating Window-- need verification</small>
          {/* <FloatingWindow {...floatingWindowProps} /> */}
          <br/>
          <small>Language Dropdown</small>
          <LanguageDropdown onSelect={(e)=> console.log(e)} />
        </div>
        {/* <Icon stroke='red' name='add' size={24}/> */}
      </div>
    </div>
  );
}

export default App;
