import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to capture full layout
  await page.setViewportSize({ width: 1280, height: 720 });
  
  try {
    // Navigate to the homepage
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    
    // Wait a moment for fonts and styling to load
    await page.waitForTimeout(2000);
    
    // Take screenshots at different scroll positions
    console.log('📸 Capturing hero section...');
    const heroShot = await page.screenshot({ path: 'verify-hero.png' });
    console.log('✅ Hero section captured');
    
    // Scroll to Latest News section
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(500);
    
    console.log('📸 Capturing Latest News section...');
    const newsShot = await page.screenshot({ path: 'verify-news.png' });
    console.log('✅ Latest News section captured');
    
    // Scroll to Taiwan Vibe section
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(500);
    
    console.log('📸 Capturing Taiwan Vibe section...');
    const vibeShot = await page.screenshot({ path: 'verify-vibe.png' });
    console.log('✅ Taiwan Vibe section captured');
    
    // Scroll to Our Mission section
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(500);
    
    console.log('📸 Capturing Our Mission section...');
    const missionShot = await page.screenshot({ path: 'verify-mission.png' });
    console.log('✅ Our Mission section captured');
    
    // Scroll to Footer
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(500);
    
    console.log('📸 Capturing Footer section...');
    const footerShot = await page.screenshot({ path: 'verify-footer.png' });
    console.log('✅ Footer section captured');
    
    // Get full page text content to verify all sections
    const pageText = await page.evaluate(() => document.body.innerText);
    
    const checks = {
      'Navbar': pageText.includes('Taiwan Center for Mandarin Learning'),
      'Hero': pageText.includes('Learn Mandarin'),
      'Latest News': pageText.includes('Latest News') && pageText.includes('May 25, 2026'),
      'Taiwan Vibe': pageText.includes('Taiwan Vibe') && pageText.includes('Food Culture'),
      'Our Mission': pageText.includes('Our Mission') && pageText.includes('Foster Mandarin Learning'),
      'Footer': pageText.includes('© 2026') && pageText.includes('Privacy Policy'),
      'Stats': pageText.includes('60+') && pageText.includes('Centers'),
      'Search Card': pageText.includes('Find a Center Near You')
    };
    
    console.log('\n✅ SECTION VERIFICATION:');
    Object.entries(checks).forEach(([section, present]) => {
      console.log(`${present ? '✅' : '❌'} ${section}: ${present ? 'FOUND' : 'MISSING'}`);
    });
    
    const allPresent = Object.values(checks).every(v => v === true);
    console.log(`\n${allPresent ? '✅ ALL SECTIONS PRESENT' : '❌ SOME SECTIONS MISSING'}`);
    
    process.exit(allPresent ? 0 : 1);
  } catch (e) {
    console.error('❌ Error:', e.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
