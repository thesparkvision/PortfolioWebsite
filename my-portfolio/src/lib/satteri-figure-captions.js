function isMeaningfulContent(child) {
  return child.type !== 'text' || child.value.trim() !== ''
}

function findCaptionedImage(paragraph) {
  const meaningfulChildren = paragraph.children.filter(isMeaningfulContent)

  if (meaningfulChildren.length !== 1)
    return null

  const image = meaningfulChildren[0]
  if (image.type !== 'element' || image.tagName !== 'img')
    return null

  const caption = image.properties?.title
  if (typeof caption !== 'string' || caption.trim() === '')
    return null

  return { image, caption: caption.trim() }
}

function createFigure(image, caption) {
  const imageProperties = { ...image.properties }
  delete imageProperties.title

  const figcaption = {
    type: 'element',
    tagName: 'figcaption',
    properties: {},
    children: [{ type: 'text', value: caption }],
  }

  return {
    type: 'element',
    tagName: 'figure',
    properties: { className: ['blog-figure'] },
    children: [{ ...image, properties: imageProperties }, figcaption],
  }
}

const figureCaptionPlugin = {
  name: 'figure-captions',
  element: {
    filter: ['p'],
    visit(paragraph, context) {
      const captionedImage = findCaptionedImage(paragraph)
      if (!captionedImage)
        return

      context.replaceNode(paragraph, createFigure(captionedImage.image, captionedImage.caption))
    },
  },
}

export default figureCaptionPlugin
