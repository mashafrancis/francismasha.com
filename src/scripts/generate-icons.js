import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

// SVG content as a string
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="#007da4" viewBox="0 0 256 256">
  <path d="M160,96v64H96V96Z" opacity="0.2"></path>
  <path d="M216,152H168V104h48a8,8,0,0,0,0-16H168V40a8,8,0,0,0-16,0V88H104V40a8,8,0,0,0-16,0V88H40a8,8,0,0,0,0,16H88v48H40a8,8,0,0,0,0,16H88v48a8,8,0,0,0,16,0V168h48v48a8,8,0,0,0,16,0V168h48a8,8,0,0,0,0-16Zm-112,0V104h48v48Z"></path>
</svg>
`

// Maskable icon SVG with padding
const maskableSvgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#007da4" rx="102.4"/>
  <svg x="128" y="128" width="256" height="256" fill="white" viewBox="0 0 256 256">
    <path d="M160,96v64H96V96Z" opacity="0.2"></path>
    <path d="M216,152H168V104h48a8,8,0,0,0,0-16H168V40a8,8,0,0,0-16,0V88H104V40a8,8,0,0,0-16,0V88H40a8,8,0,0,0,0,16H88v48H40a8,8,0,0,0,0,16H88v48a8,8,0,0,0,16,0V168h48v48a8,8,0,0,0,16,0V168h48a8,8,0,0,0,0-16Zm-112,0V104h48v48Z"></path>
  </svg>
</svg>
`

async function generateIcons() {
  const publicDir = path.join(process.cwd(), "src", "app")

  try {
    await fs.mkdir(publicDir, { recursive: true })

    // Generate 192x192 PNG
    await sharp(Buffer.from(svgContent)).resize(192, 192).png().toFile(path.join(publicDir, "icon-192x192.png"))

    // Generate 512x512 PNG
    await sharp(Buffer.from(svgContent)).resize(512, 512).png().toFile(path.join(publicDir, "icon-512x512.png"))

    // Generate maskable icon
    await sharp(Buffer.from(maskableSvgContent))
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, "maskable-icon.png"))

    // Generate favicon.ico (32x32)
    await sharp(Buffer.from(svgContent)).resize(32, 32).png().toFile(path.join(publicDir, "favicon.ico"))

    console.log("✅ All icons generated successfully!")
    console.log("Generated files:")
    console.log("- favicon.ico (32x32)")
    console.log("- icon-192x192.png")
    console.log("- icon-512x512.png")
    console.log("- maskable-icon.png")
  } catch (error) {
    console.error("❌ Error generating icons:", error)
  }
}

generateIcons()
