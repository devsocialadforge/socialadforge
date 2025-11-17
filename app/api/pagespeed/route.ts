import { NextResponse } from 'next/server';

const API_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');
  const strategy = searchParams.get('strategy') || 'mobile';

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  const apiKey = process.env.PAGESPEED_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'PAGESPEED_API_KEY is not configured on the server' },
      { status: 500 },
    );
  }

  const googleUrl = new URL(API_ENDPOINT);
  googleUrl.searchParams.set('url', targetUrl);
  googleUrl.searchParams.set('strategy', strategy);
  googleUrl.searchParams.set('key', apiKey);

  try {
    const response = await fetch(googleUrl.toString());

    if (!response.ok) {
      return NextResponse.json(
        { error: `Google PageSpeed API error: ${response.status}` },
        { status: response.status },
      );
    }

    const json = await response.json();
    const lighthouse = json.lighthouseResult;
    const categories = lighthouse.categories;

    const result = {
      seo: categories.seo?.score ? Math.round(categories.seo.score * 100) : null,
      accessibility: categories.accessibility?.score
        ? Math.round(categories.accessibility.score * 100)
        : null,
      bestPractices: categories['best-practices']?.score
        ? Math.round(categories['best-practices'].score * 100)
        : null,
      performance: categories.performance?.score
        ? Math.round(categories.performance.score * 100)
        : null,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('PageSpeed API route error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch PageSpeed data from Google' },
      { status: 500 },
    );
  }
}


