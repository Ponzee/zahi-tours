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

-- Insert new Latin Cross of Saint Benedict product
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
  'latin-cross-saint-benedict',
  'Latin Cross of Saint Benedict – Blessed in Jerusalem',
  'Crafted from authentic olive wood, this Latin (Roman Catholic) cross is blessed at the Church of the Holy Sepulchre or at one of the Via Dolorosa stations in Jerusalem by Zahi. Each cross is personally carried to a holy location for a special blessing before it ships. The specific cross design may vary according to inventory, ensuring each piece is unique. Each purchase includes the blessed cross, video documentation of the blessing ceremony, and worldwide tracked shipping (fees included).',
  25000,
  'usd',
  '/shop/latin-cross-saint-benedict/latin-cross-saint-benedict-01.webp',
  '[
    "/shop/latin-cross-saint-benedict/latin-cross-saint-benedict-01.webp",
    "/shop/latin-cross-saint-benedict/latin-cross-saint-benedict-02.webp",
    "/shop/latin-cross-saint-benedict/latin-cross-saint-benedict-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new New and Old Testament Bible product
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
  'new-and-old-testament',
  'New and Old Testament – High Quality Olive Wood Cover, King James',
  'This beautifully crafted Bible features a high-quality olive wood cover with intricate engravings, including "The Lord''s Prayer" and "Jerusalem" inscriptions. Measuring 16 cm (6.2 inches), this King James Version Bible is a treasured keepsake from the Holy Land. Each purchase includes a personalized video message filmed at a location of your choice in the Old City of Jerusalem, allowing you to share a special message or prayer. The Bible will be carefully packaged and shipped directly to your home with worldwide tracked shipping (fees included).',
  30000,
  'usd',
  '/shop/new-and-old-testament/new-and-old-testament-01.webp',
  '[
    "/shop/new-and-old-testament/new-and-old-testament-01.webp",
    "/shop/new-and-old-testament/new-and-old-testament-02.webp",
    "/shop/new-and-old-testament/new-and-old-testament-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Roman Catholic Latin Cross with Jerusalem soil product
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
  'roman-catholic-latin-cross',
  'Roman Catholic Latin Cross – With Jerusalem Soil, Blessed in Jerusalem',
  'Crafted from authentic olive wood, this Latin (Roman Catholic) cross features a unique addition: soil from Jerusalem contained in special capsules at each end of the cross. Blessed at the Church of the Holy Sepulchre or at one of the Via Dolorosa stations in Jerusalem by Zahi, each cross is personally carried to a holy location for a special blessing before it ships. The specific cross design may vary according to inventory, ensuring each piece is unique. Each purchase includes the blessed cross with Jerusalem soil, video documentation of the blessing ceremony, and worldwide tracked shipping (fees included).',
  26000,
  'usd',
  '/shop/roman-catholic-latin-cross/roman-catholic-latin-cross-01.webp',
  '[
    "/shop/roman-catholic-latin-cross/roman-catholic-latin-cross-01.webp",
    "/shop/roman-catholic-latin-cross/roman-catholic-latin-cross-02.webp",
    "/shop/roman-catholic-latin-cross/roman-catholic-latin-cross-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Classic Roman Catholic Latin Cross product
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
  'classic-roman-catholic-latin-cross',
  'Classic Roman Catholic Latin Cross – Blessed in Jerusalem',
  'Crafted from authentic olive wood, this classic Latin (Roman Catholic) cross is blessed at the Church of the Holy Sepulchre or at one of the Via Dolorosa stations in Jerusalem by Zahi. Each cross is personally carried to a holy location for a special blessing before it ships. The specific cross design may vary according to inventory, ensuring each piece is unique. Each purchase includes the blessed cross, video documentation of the blessing ceremony, and worldwide tracked shipping (fees included).',
  24000,
  'usd',
  '/shop/classic-roman-catholic-latin-cross/classic-roman-catholic-latin-cross-01.webp',
  '[
    "/shop/classic-roman-catholic-latin-cross/classic-roman-catholic-latin-cross-01.webp",
    "/shop/classic-roman-catholic-latin-cross/classic-roman-catholic-latin-cross-02.webp",
    "/shop/classic-roman-catholic-latin-cross/classic-roman-catholic-latin-cross-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Candle Lighting at Jesus Tomb service product
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
  'candle-lighting-jesus-tomb',
  'Private Candle Lighting at the Tomb of Jesus – Jerusalem + Video',
  'Experience a deeply personal and sacred moment at the Tomb of Jesus in Jerusalem. Zahi will perform a private candle lighting ceremony at this holiest of sites, and your purchase includes a special video documenting the experience, which will be shared on YouTube. Please send the full message you would like Zahi to say at the tomb of Jesus during the ceremony. If you prefer your message to remain private and not be included in the video, please indicate that in your order notes. This is a unique opportunity to have your prayers and intentions honored at one of Christianity''s most sacred locations.',
  9900,
  'usd',
  '/shop/candle-lighting-jesus-tomb/candle-lighting-jesus-tomb-01.webp',
  '[
    "/shop/candle-lighting-jesus-tomb/candle-lighting-jesus-tomb-01.webp",
    "/shop/candle-lighting-jesus-tomb/candle-lighting-jesus-tomb-02.webp",
    "/shop/candle-lighting-jesus-tomb/candle-lighting-jesus-tomb-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new High-Quality Wooden Mezuzah product
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
  'high-quality-wooden-mezuzah',
  'High-Quality Wooden Mezuzah – Designed for Christians',
  'Crafted from authentic olive wood, this beautifully designed mezuzah features intricate carvings including a menorah, Star of David, and Christian fish symbol, with "Jerusalem" inscribed in both English and Hebrew. Designed specifically for Christians, each mezuzah is unique with a variable selection of designs available. Your purchase includes a special YouTube video filmed at a location in the Old City of Jerusalem, showcasing your mezuzah in this sacred setting. The mezuzah will be carefully packaged and shipped directly to your home with worldwide tracked shipping (fees included).',
  24000,
  'usd',
  '/shop/high-quality-wooden-mezuzah/high-quality-wooden-mezuzah-01.webp',
  '[
    "/shop/high-quality-wooden-mezuzah/high-quality-wooden-mezuzah-01.webp",
    "/shop/high-quality-wooden-mezuzah/high-quality-wooden-mezuzah-02.webp",
    "/shop/high-quality-wooden-mezuzah/high-quality-wooden-mezuzah-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new High-Quality Kosher Jewish Mezuzah product
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
  'high-quality-jewish-mezuzah',
  'High-Quality Kosher Jewish Mezuzah – Loved by Christians',
  'This beautifully crafted kosher Jewish mezuzah features intricate engravings including the Hebrew letter "Shin" (ש), a Star of David, and a detailed Jerusalem cityscape, with "Jerusalem" inscribed in both English and Hebrew. Loved by Christians for its spiritual significance and connection to the Holy Land, each mezuzah is unique with a variable selection of designs available. Your purchase includes a special YouTube video filmed at a location in the Old City of Jerusalem, showcasing your mezuzah in this sacred setting. We recommend blessing the mezuzah at the Western Wall for added spiritual significance. The mezuzah will be carefully packaged and shipped directly to your home with worldwide tracked shipping (fees included).',
  24000,
  'usd',
  '/shop/high-quality-jewish-mezuzah/high-quality-jewish-mezuzah-01.webp',
  '[
    "/shop/high-quality-jewish-mezuzah/high-quality-jewish-mezuzah-01.webp",
    "/shop/high-quality-jewish-mezuzah/high-quality-jewish-mezuzah-02.webp",
    "/shop/high-quality-jewish-mezuzah/high-quality-jewish-mezuzah-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

-- Insert new Holy Fire Candles product
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
  'holy-fire-candles',
  'Holy Fire Candles from Jerusalem – 33 Candles, Lighting Ceremony, Video, and Delivery',
  'This powerful set includes 33 candles, symbolizing the years of Jesus'' life, making it a meaningful gift for every Christian in need of healing and spiritual connection. The candles will be blessed at all the significant locations in the Church of the Holy Sepulchre (also known as the Church of the Resurrection) in Jerusalem by Zahi. The entire lighting ceremony will be documented in a special video that will be uploaded to Zahi''s YouTube channel, allowing you to share in this sacred moment. The candles, lit by the Holy Fire, can be sent directly to your home at no additional cost if desired. Each purchase includes the blessed candles, video documentation of the ceremony, and worldwide tracked shipping (fees included).',
  17000,
  'usd',
  '/shop/holy-fire-candles/holy-fire-candles-01.webp',
  '[
    "/shop/holy-fire-candles/holy-fire-candles-01.webp",
    "/shop/holy-fire-candles/holy-fire-candles-02.webp",
    "/shop/holy-fire-candles/holy-fire-candles-03.webp"
  ]'::jsonb,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
  image_url = EXCLUDED.image_url,
  image_urls = EXCLUDED.image_urls,
  updated_at = timezone('utc', now());

