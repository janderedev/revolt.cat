import Head from "next/head";
import owoify from "owoify-js";

interface MetaObject {
    title: string;
    url: string;
    thumbnailAt: string;
    description: string;
}

interface CustomMetaProps {
    meta: MetaObject;
}

const CustomMeta = ({ meta }: CustomMetaProps) => (
    <Head>
        <meta property="og:title" content={owoify(meta.title, 'owo')} key="title" />
        <meta property="og:url" content={meta.url} key="url" />
        <meta property="og:image" content={meta.thumbnailAt} key="thumbnail" />
        <meta
            property="og:description"
            content={owoify(meta.description, 'uwu')}
            key="description"
        />
        <meta property="twitter:title" content={owoify(meta.title, 'owo')} key="tw-title" />
        <meta
            property="twitter:image"
            content={meta.thumbnailAt}
            key="tw-thumbnail"
        />
        <meta
            property="twitter:image:alt"
            content={owoify(meta.title, 'owo')}
            key="tw-thumbnail-alt"
        />
        <meta
            property="twitter:description"
            content={owoify(meta.description, 'uwu')}
            key="tw-description"
        />
    </Head>
);

export default CustomMeta;
