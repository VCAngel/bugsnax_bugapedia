import { JSX, ComponentChildren, Fragment } from "preact";
import { Head } from '$fresh/runtime.ts';

export type Props = {
    children: ComponentChildren;
    title?: string;
    name?: string;
    description?: string;
};

export function Container({ children, ...customMeta }: Props) {
    return (
        <>
            <SEO {...customMeta} />
            <div className="container">{children}</div>
        </>
    )
}

const SEO = ({ ...customMeta }) => {
    const meta = {
        title: "Fresh Application!",
        description: "This is a fresh application :]",
        type: "website",
        ...customMeta
    };

    return (
        <Head>
            <title>{meta.title}</title>
            <meta content={meta.description} name="description" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/css/bundle.min.css" />
        </Head>
    )
}