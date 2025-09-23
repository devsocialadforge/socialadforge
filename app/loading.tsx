import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      {/* Header Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="h-6 w-32" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative mx-auto w-full h-screen pt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 h-full">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Greeting */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-32 mx-auto lg:mx-0" />
              <Skeleton className="h-16 w-80 mx-auto lg:mx-0" />
            </div>

            {/* Title */}
            <Skeleton className="h-12 w-64 mx-auto lg:mx-0" />

            {/* Description */}
            <Skeleton className="h-20 w-full max-w-lg mx-auto lg:mx-0" />

            {/* Stats */}
            <div className="flex flex-row gap-6 justify-center lg:justify-start">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="text-center lg:text-left">
                  <Skeleton className="h-8 w-12 mx-auto lg:mx-0 mb-1" />
                  <Skeleton className="h-4 w-20 mx-auto lg:mx-0" />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Skeleton className="h-12 w-32 mx-auto lg:mx-0" />
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex-shrink-0">
            <Skeleton className="w-64 h-80 rounded-3xl" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="w-6 h-10 rounded-full" />
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Skeleton className="w-full h-full" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Skeleton className="h-12 w-48" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-20" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </footer>
    </div>
  );
}
