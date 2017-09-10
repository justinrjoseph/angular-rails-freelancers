10.times do |i|
  FreelanceDocument.create!(
    title: "Document #{i + 1}",
    description: 'Ad quem domesticarum, eu iis irure legam tamen. Si aute officia, nostrud illustriora est nostrud.',
    file_url: 'https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/editusp=sharing',
    image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
  )
end
