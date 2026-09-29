function makeObject (articleForm) {
  // created by User
  const res = {}
  res.link = articleForm?.link?.value
  res.image = articleForm?.image?.value
  res.title = articleForm?.title?.value
  res.summary = articleForm?.summary?.value
  res.tag = articleForm?.tag?.value
  res.domain = articleForm?.domain?.value

  // created by MongoDB and used to identify article for edit / delete
  res._id = articleForm?._id?.value
  return res
}

export default makeObject
