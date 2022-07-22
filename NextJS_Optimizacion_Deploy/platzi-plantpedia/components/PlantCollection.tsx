import NextImage, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import { Grid, GridProps } from '@ui/Grid'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'

import { Excerpt } from '@components/Excerpt'

type PlantCollectionProps = {
  plants: Plant[]
  variant?: 'square' | 'vertical'
  className?: string
}

export function PlantCollection({
  plants,
  variant,
  className,
}: PlantCollectionProps) {
  return (
    <Grid container component="ul" spacing={4} className={className}>
      {plants.map((plant) => (
        <PlantEntry key={plant.id} plant={plant} variant={variant} />
      ))}
    </Grid>
  )
}

type PlantEntryType = {
  plant: Plant
  variant?: 'square' | 'vertical'
}

export function PlantEntry({ plant, variant = 'square' }: PlantEntryType) {
  let gridItemProps: GridProps = { xs: 6, md: 4 }
  let Component: (props: Plant) => JSX.Element = PlantEntrySquare

  if (variant === 'vertical') {
    Component = PlantEntryVertical
    gridItemProps = {
      xs: 12,
      sm: 6,
    }
  }

  return (
    <Grid key={plant.id} role="listitem" item {...gridItemProps}>
      <Component {...plant} />
    </Grid>
  )
}

const aspectRatioToRatio = {
  '1:1': 1,
  '4:3': 3 / 4,
  '16:9': 9 / 19,
}

function calcAspectRatio(
  aspectRatio: '1:1' | '4:3' | '16:9',
  width: number
): number {
  const ratio = aspectRatioToRatio[aspectRatio]

  return Math.floor(width * ratio)
}

type ImageProps = {
  layout: 'responsive' | 'fixed' | 'intrinsic' | undefined
  src: string
  width: number
  height?: never
  aspectRatio: '1:1' | '4:3' | '16:9'
  fit?: 'pad' | 'fill' | 'crop' | 'scale'
}

function Image({ layout, src, width, aspectRatio, fit = 'scale' }: ImageProps) {
  const height = calcAspectRatio(aspectRatio, width)

  const loader = (args: ImageLoaderProps): string => {
    const loaderHeight = calcAspectRatio(aspectRatio, args.width)

    return `${args.src}?w=${width}&h=${loaderHeight}&fit=${fit}`
  }

  return (
    <NextImage
      layout={layout}
      src={src}
      width={width}
      height={height}
      loader={loader}
    />
  )
}

export function PlantEntrySquare({ image, plantName, slug }: Plant) {
  return (
    <Link href={`/entry/${slug}`}>
      <a title={`Go to ${plantName}`}>
        <div className="opacity-95 hover:opacity-100">
          <Image
            layout="responsive"
            aspectRatio="4:3"
            src={image.url}
            width={460}
            fit="scale"
          />
          <div className="p-4">
            <Typography variant="h4" className="break-words">
              {plantName}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  )
}

export function PlantEntryInline({
  image,
  plantName,
  slug,
  className,
}: Plant & { className?: string }) {
  return (
    <Link href={`/entry/${slug}`}>
      <a title={`Go to ${plantName}`}>
        <div
          className={`opacity-95 hover:opacity-100 flex items-end ${className}`}
        >
          <img src={image.url} width={84} className="flex-none" />
          <div className="pl-2 flex-auto">
            <Typography variant="h6" className="break-words">
              {plantName}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  )
}

export function PlantEntryVertical({
  image,
  plantName,
  description,
  slug,
}: Plant) {
  return (
    <div className="opacity-95 hover:opacity-100">
      <Link href={`/entry/${slug}`}>
        <a title={`Go to ${plantName}`}>
          <img src={image.url} width={624} />
          <Typography variant="h2" className="break-words pt-4 px-4">
            {plantName}
          </Typography>
        </a>
      </Link>
      <div className="px-4 pb-4">
        <Excerpt
          richText={description}
          color="textSecondary"
          className="py-6"
        />
        <Link href={`/entry/${slug}`} passHref>
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  )
}
