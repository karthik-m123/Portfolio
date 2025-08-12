import {
  CloudOrbit,
  OrbitingImage,
} from "@/components/ui/cloud-orbit"

const orbitingImagesData = [
  {
    speed: 20,
    radius: 119,
    size: 53,
    startAt: 0.15625,
    images: [
      {
        name: "Deepseek Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/deepseek-logo.webp",
      },
      {
        name: "ChatGPT",
        url: "https://img.icons8.com/color/48/chatgpt.png",
      },
    ],
  },
  {
    speed: 20,
    radius: 118,
    size: 85,
    startAt: 0.25,
    images: [
      {
        name: "Google Gemini",
        url: "https://img.icons8.com/?size=100&id=Yl9ip6CjqAEI&format=png&color=000000",
      },
      {
        name: "Claude",
        url: "https://img.icons8.com/?size=100&id=mrNoLXFmvXDX&format=png&color=000000",
      },
    ],
  },
  {
    speed: 20,
    radius: 130,
    size: 73,
    startAt: 0.4375,
    images: [
      {
        name: "Meta",
        url: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
      },
      {
        name: "Nvidia",
        url: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
      },
    ],
  },
  {
    speed: 20,
    radius: 120,
    size: 49,
    startAt: 0.61,
    images: [
      {
        name: "Intel",
        url: "https://img.icons8.com/?size=100&id=HAdDrhGGO64N&format=png&color=000000",
      },
      {
        name: "AMD",
        url: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
      },
    ],
  },
  {
    speed: 20,
    radius: 136,
    size: 40,
    startAt: 0.65625,
    images: [
      {
        name: "VMware",
        url: "https://img.icons8.com/?size=100&id=9yRmcbZ7G0es&format=png&color=000000",
      },
      {
        name: "Cisco",
        url: "https://img.icons8.com/?size=100&id=kzJWN5jCDzpq&format=png&color=000000",
      },
    ],
  },
  {
    speed: 20,
    radius: 111,
    size: 87,
    startAt: 0.75,
    images: [
      {
        name: "Microsoft",
        url: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
      },
      {
        name: "Apple",
        url: "https://img.icons8.com/?size=100&id=fG5Tnj4ARIoI&format=png&color=000000",
      },
    ],
  },
  {
    speed: 20,
    radius: 124,
    size: 73,
    startAt: 0.9375,
    images: [
      {
        name: "Linux",
        url: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
      },
      {
        name: "Windows",
        url: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      },
    ],
  },
]

export default function CloudOrbitDemo() {
  return (
    <CloudOrbit
      duration={3}
      size={160}
      images={[
        {
          name: "Avatar",
          url: "src/assets/avatar-1.webp",
        },
        {
          name: "Deepseek Logo",
          url: "src/assets/avatar-1.webp",
        },
      ]}
    >
      {orbitingImagesData.map((orbit, index) => (
        <OrbitingImage
          key={index}
          speed={orbit.speed}
          radius={orbit.radius}
          size={orbit.size}
          startAt={orbit.startAt}
          images={orbit.images}
          duration={3}
        />
      ))}
    </CloudOrbit>
  )
}