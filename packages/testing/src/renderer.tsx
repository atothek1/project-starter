import { render, RenderOptions } from '@testing-library/react'
import { Wrapper } from "./Wrapper";

export const renderer = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render( ui,  { wrapper: Wrapper, ...options } )

