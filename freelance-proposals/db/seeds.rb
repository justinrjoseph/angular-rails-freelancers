10.times do |i|
  Proposal.create!(
    customer: "Customer #{i + 1}",
    portfolio_url: 'http://portfolio.jordanhudgens.com',
    tools: 'Ruby on Rails, Angular, PostgreSQL',
    estimated_hours: (80 + i),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'jordan@devcamp.com'
  )
end
