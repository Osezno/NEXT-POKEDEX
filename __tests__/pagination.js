import * as React from 'react'
import theme from "src/theme";
import Pagination from 'containers/Controls/Pagination'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMount, createShallow, createRender, unwrap } from '@material-ui/core/test-utils';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'


describe('Render Pagination, it should render a range of numbers from i to i + 9 ', () => {
   
    it("Render from 1 - 10", () => {
        render(
            <MuiThemeProvider
                theme={theme}
            >
                <Pagination currentPage={1} />
            </MuiThemeProvider>
        );
       
        for (let i = 1; i < 11; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument()
        }
    });

    it("Render from 10 - 19", () => {
        render(
            <MuiThemeProvider
                theme={theme}
            >
                <Pagination currentPage={10} />
            </MuiThemeProvider>
        );
       
        for (let i = 10; i < 20; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument()
        }
    });

    it("Render from 8 - 17", () => {
        render(
            <MuiThemeProvider
                theme={theme}
            >
                <Pagination currentPage={8} />
            </MuiThemeProvider>
        );
       
        for (let i = 8; i < 18; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument()
        }
    });

    it("Render from 1 - 10 if values is  less than 1", () => {
        render(
            <MuiThemeProvider
                theme={theme}
            >
                <Pagination currentPage={-3} />
            </MuiThemeProvider>
        );
       
        for (let i = 1; i < 11; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument()
        }
    });
});

