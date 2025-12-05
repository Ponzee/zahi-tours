-- Update existing blue product with new folder structure and image_urls
UPDATE shop_products
SET 
  image_url = '/shop/armenian-blessed-cross-blue/armenian-blessed-cross-blue-01.webp',
  image_urls = '[
    "/shop/armenian-blessed-cross-blue/armenian-blessed-cross-blue-01.webp",
    "/shop/armenian-blessed-cross-blue/armenian-blessed-cross-blue-02.webp",
    "/shop/armenian-blessed-cross-blue/armenian-blessed-cross-blue-03.webp"
  ]'::jsonb,
  updated_at = timezone('utc', now())
WHERE slug = 'armenian-blessed-cross-blue';

-- Insert new golden product
INSERT INTO shop_products (
  slug,
  name,
  description,
  price_cents,
  currency,
  image_url,
  image_urls,
  status
) VALUES (
  'armenian-blessed-cross-golden',
  'Armenian Blessed Cross – Hand-Painted in Golden',
  'Hand-painted by an Armenian artisan in Jerusalem''s Old City, this 20 cm × 10 cm framed cross is carried by Zahi to a holy site for a personal blessing before it ships. Each purchase includes the unique artwork, a short video filmed during the blessing, and worldwide tracked shipping (fees included).',
  28000,
  'usd',
  '/shop/armenian-blessed-cross-golden/armenian-blessed-cross-golden-01.webp',
  '[
    "/shop/armenian-blessed-cross-golden/armenian-blessed-cross-golden-01.webp",
    "/shop/armenian-blessed-cross-golden/armenian-blessed-cross-golden-02.webp",
    "/shop/armenian-blessed-cross-golden/armenian-blessed-cross-golden-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Jerusalem product
INSERT INTO shop_products (
  slug,
  name,
  description,
  price_cents,
  currency,
  image_url,
  image_urls,
  status
) VALUES (
  'armenian-blessed-cross-jerusalem',
  'Armenian Blessed Cross – Hand-Painted with Jerusalem',
  'Hand-painted by an Armenian artisan in Jerusalem''s Old City, this 20 cm × 10 cm framed cross features the word "Jerusalem" beautifully inscribed, making it a unique keepsake from the Holy City. Carried by Zahi to a holy site for a personal blessing before it ships, each purchase includes the unique artwork, a short video filmed during the blessing, and worldwide tracked shipping (fees included).',
  28000,
  'usd',
  '/shop/armenian-blessed-cross-jerusalem/armenian-blessed-cross-jerusalem-01.webp',
  '[
    "/shop/armenian-blessed-cross-jerusalem/armenian-blessed-cross-jerusalem-01.webp",
    "/shop/armenian-blessed-cross-jerusalem/armenian-blessed-cross-jerusalem-02.webp",
    "/shop/armenian-blessed-cross-jerusalem/armenian-blessed-cross-jerusalem-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Greek Orthodox Cross product
INSERT INTO shop_products (
  slug,
  name,
  description,
  price_cents,
  currency,
  image_url,
  image_urls,
  status
) VALUES (
  'greek-orthodox-cross',
  'Greek Orthodox Cross – Blessed in Jerusalem',
  'Crafted from authentic olive wood, this 19 cm × 19 cm (7.4" × 7.4") Jerusalem Cross is blessed at the Church of the Holy Sepulchre or another sacred site in Jerusalem by Zahi. Each cross is personally carried to a holy location for a special blessing before it ships. The specific cross design may vary according to inventory, ensuring each piece is unique. Each purchase includes the blessed cross, video documentation of the blessing ceremony, and worldwide tracked shipping (fees included).',
  26000,
  'usd',
  '/shop/greek-orthodox-cross/greek-orthodox-cross-01.webp',
  '[
    "/shop/greek-orthodox-cross/greek-orthodox-cross-01.webp",
    "/shop/greek-orthodox-cross/greek-orthodox-cross-02.webp",
    "/shop/greek-orthodox-cross/greek-orthodox-cross-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Blessed Jerusalem Cross product
INSERT INTO shop_products (
  slug,
  name,
  description,
  price_cents,
  currency,
  image_url,
  image_urls,
  status
) VALUES (
  'blessed-jerusalem-cross',
  'Blessed Jerusalem Cross – Church of the Holy Sepulchre',
  'Crafted from authentic olive wood, this 19 cm × 19 cm (7.4" × 7.4") Jerusalem Cross is blessed at the Church of the Holy Sepulchre or another sacred site in Jerusalem by Zahi. Each cross is personally carried to a holy location for a special blessing before it ships. The specific cross design may vary according to inventory, ensuring each piece is unique. Each purchase includes the blessed cross, video documentation of the blessing ceremony, and worldwide tracked shipping (fees included).',
  24000,
  'usd',
  '/shop/blessed-jerusalem-cross/blessed-jerusalem-cross-01.webp',
  '[
    "/shop/blessed-jerusalem-cross/blessed-jerusalem-cross-01.webp",
    "/shop/blessed-jerusalem-cross/blessed-jerusalem-cross-02.webp",
    "/shop/blessed-jerusalem-cross/blessed-jerusalem-cross-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

