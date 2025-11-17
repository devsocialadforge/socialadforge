'use client';
import { useEffect, useState } from 'react';

interface PageSpeedScores {
  seo?: any;
  accessibility: number | null;
  bestPractices: number | null;
  performance: number | null;
}

interface PageSpeedResult extends PageSpeedScores {
  loading: boolean;
  error: string | null;
}

type Strategy = 'mobile' | 'desktop';

/**
 * Custom hook to fetch PageSpeed Insights data via internal API route
 * @param targetUrl - The URL to analyze
 * @param strategy - The strategy to use ('mobile' or 'desktop')
 * @returns PageSpeed scores as percentages along with loading and error states
 */
export function usePagespeed(
  targetUrl: string,
  strategy: Strategy = 'mobile'
): PageSpeedResult {
  const [scores, setScores] = useState<PageSpeedScores>({
    seo: null,
    accessibility: null,
    bestPractices: null,
    performance: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!targetUrl) {
      setError('Target URL is required');
      return;
    }

    const fetchPageSpeedData = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiUrl = `/api/pagespeed?url=${encodeURIComponent(
          targetUrl,
        )}&strategy=${encodeURIComponent(strategy)}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: PageSpeedScores & { error?: string } = await response.json();

        if ('error' in data && data.error) {
          throw new Error(data.error);
        }
      

        setScores({
          seo: data,
          accessibility: data.accessibility,
          bestPractices: data.bestPractices,
          performance: data.performance,
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to fetch PageSpeed data';
        setError(errorMessage);
        console.error('Fetching PageSpeed Insights failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageSpeedData();
  }, [targetUrl, strategy]);

  return {
    ...scores,
    loading,
    error,
  };
}
