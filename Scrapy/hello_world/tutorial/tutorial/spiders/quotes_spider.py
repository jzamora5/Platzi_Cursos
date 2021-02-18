import scrapy


class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = [
        'https://quotes.toscrape.com/'
    ]

    def parse(self, response):
        with open('resultados.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
