import * as React from 'react'
import theme from "src/theme";
import Text from 'components/Text/Index'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'


describe("Simple text component", () => {
  it("Render the text", () => {
    render(
      <MuiThemeProvider
        theme={theme}
      >
        <Text>
          {"Testing!"}
        </Text>
      </MuiThemeProvider>
    );
    expect(screen.getByText("Testing!")).toBeInTheDocument()
  });

  it("Render with h1  when title is set as prop", () => {
    render(
      <MuiThemeProvider
        theme={theme}
      >
        <Text type={"title"}>
          {"Elemento H1"}
        </Text>
      </MuiThemeProvider>
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
  });

  it("Render with h2  when subtitle is set as prop", () => {
    render(
      <MuiThemeProvider
        theme={theme}
      >
        <Text type={"subtitle"}>
          {"Elemento H2"}
        </Text>
      </MuiThemeProvider>
    );

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
  });

  it("Call the function passed onClick to the element", () => {
    let value = "Eng"
    const setValue = (lang) => value = lang
  
    render(
      <MuiThemeProvider
        theme={theme}
      >
        <Text type={"subtitle"} onClick={()=> setValue("Esp")} >
          {"Click"}
        </Text>
      </MuiThemeProvider>
    );
    
    let texto = screen.getByText("Click")
    fireEvent.click(texto)
    expect(value).toEqual("Esp")
  });
});

