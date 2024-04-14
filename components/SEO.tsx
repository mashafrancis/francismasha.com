"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

import metadata from "../app/metadata";

interface CommonSEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage:
    | string
    | {
        "@type": string;
        url: string;
      }[];
  twImage: string;
  canonicalUrl?: string;
}

const CommonSEO = (props: CommonSEOProps) => {
  const { title, description, ogType, ogImage, twImage, canonicalUrl } = props;
  const pathname = usePathname();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${metadata.siteUrl}${pathname}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={metadata.title.default} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metadata.twitter.title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${metadata.siteUrl}${pathname}`}
      />
    </Head>
  );
};

interface PageSEOProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const PageSEO = ({ title, description, imageUrl }: PageSEOProps) => {
  const ogImageUrl = metadata.siteUrl + (imageUrl ?? metadata.socialBanner);
  const twImageUrl = metadata.siteUrl + (imageUrl ?? metadata.socialBanner);

  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const TagSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = metadata.siteUrl + metadata.socialBanner;
  const twImageUrl = metadata.siteUrl + metadata.socialBanner;
  const pathname = usePathname();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${metadata.siteUrl}${pathname}/feed.xml`}
        />
      </Head>
    </>
  );
};

// interface BlogSeoProps extends PostFrontMatter {
// 	authorDetails?: AuthorFrontMatter[];
// 	url: string;
// }
//
// export const BlogSEO = ({
// 	authorDetails,
// 	title,
// 	summary,
// 	date,
// 	lastmod,
// 	url,
// 	images = [],
// 	canonicalUrl,
// }: BlogSeoProps) => {
// 	const publishedAt = new Date(date).toISOString();
// 	const modifiedAt = new Date(lastmod || date).toISOString();
// 	const imagesArr =
// 		images.length === 0
// 			? [siteMetadata.socialBanner]
// 			: typeof images === 'string'
// 			? [images]
// 			: images;
//
// 	const featuredImages = imagesArr.map((img) => {
// 		return {
// 			'@type': 'ImageObject',
// 			url: `${siteMetadata.siteUrl}${img}`,
// 		};
// 	});
//
// 	let authorList;
// 	if (authorDetails) {
// 		authorList = authorDetails.map((author) => {
// 			return {
// 				'@type': 'Person',
// 				name: author.name,
// 			};
// 		});
// 	} else {
// 		authorList = {
// 			'@type': 'Person',
// 			name: siteMetadata.author,
// 		};
// 	}
//
// 	const structuredData = {
// 		'@context': 'https://schema.org',
// 		'@type': 'Article',
// 		mainEntityOfPage: {
// 			'@type': 'WebPage',
// 			'@id': url,
// 		},
// 		headline: title,
// 		image: featuredImages,
// 		datePublished: publishedAt,
// 		dateModified: modifiedAt,
// 		author: authorList,
// 		publisher: {
// 			'@type': 'Organization',
// 			name: siteMetadata.author,
// 			logo: {
// 				'@type': 'ImageObject',
// 				url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
// 			},
// 		},
// 		description: summary,
// 	};
//
// 	const twImageUrl = featuredImages[0].url;
//
// 	return (
// 		<>
// 			<CommonSEO
// 				title={title}
// 				description={summary}
// 				ogType='article'
// 				ogImage={featuredImages}
// 				twImage={twImageUrl}
// 				canonicalUrl={canonicalUrl}
// 			/>
// 			<Head>
// 				{date && (
// 					<meta property='article:published_time' content={publishedAt} />
// 				)}
// 				{lastmod && (
// 					<meta property='article:modified_time' content={modifiedAt} />
// 				)}
// 				<script
// 					type='application/ld+json'
// 					dangerouslySetInnerHTML={{
// 						__html: JSON.stringify(structuredData, null, 2),
// 					}}
// 				/>
// 			</Head>
// 		</>
// 	);
// };
