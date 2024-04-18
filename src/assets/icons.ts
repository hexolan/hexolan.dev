import { getImage } from "astro:assets";

import faviconSvgSrc from "./favicon.svg";
import faviconPngSrc from "./favicon.png";

interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
}

const preparePngIcons = async (): Promise<Map<number, string>> => {
  const iconSizes = [48, 72, 96, 144, 192, 256, 384, 512]
  let elems: Array<[number, string]> = await Promise.all(
    iconSizes.map(async (size) => {
      const faviconPng = await getImage({ src: faviconPngSrc, format: "png", width: size, height: size });
      return [size, faviconPng.src]
    })
  )

  return new Map<number, string>(elems)
}

const getManifestIcons = (): Array<ManifestIcon> => {
  let manifestIcons: Array<ManifestIcon> = new Array()
  faviconPngs.forEach((src, size) => {
    manifestIcons.push({
      src: src,
      type: "image/png",
      sizes: `${size}x${size}`
    })
  })

  return manifestIcons
}

export const faviconSvg = await getImage({ src: faviconSvgSrc, format: "svg" })
export const faviconPngs = await preparePngIcons()
export { getManifestIcons }