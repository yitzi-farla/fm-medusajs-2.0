"use client"

import { Button, Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <section className="relative min-h-[576px] w-full bg-ui-bg-subtle overflow-hidden border-b border-ui-border-base">
      {/* Background image */}
      <img
        src="https://537235-e4.myshopify.com/cdn/shop/files/slide_1.jpg?v=1723183798&width=3200"
        alt="Premium Gloves"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Content wrapper */}
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center gap-6">
        <Heading
          level="h1"
          className="text-ui-fg-base max-w-3xl"
        >
          Premium Disposable Gloves for Every Industry
        </Heading>
        <Text className="text-ui-fg-subtle max-w-xl">
          Durable, Comfortable & Reliable
        </Text>

        <Button size="large" asChild>
          <a href="/store">Shop Now</a>
        </Button>
      </div>
    </section>
  )
}

export default Hero
