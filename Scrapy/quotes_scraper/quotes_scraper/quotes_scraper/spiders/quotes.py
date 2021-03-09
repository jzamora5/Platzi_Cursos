import scrapy

# Titulo = //h1/a/text()
# Citas = //span[@class="text" and @itemprop="text"]/text()
# Top ten tags = //div[contains(@class, "tags-box")]//span[@class="tag-item"]/a/text()
# Next Page Button = //ul[@class="pager"]//li[@class="next"]/a/@href


class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/'
    ]
    custom_settings = {
        'FEED_URI': 'quotes.json',
        'FEED_FORMAT': 'json',
        'CONCURRENT_REQUESTS': 24,
        'MEMUSAGE_LIMIT_MB': 2048,
        'MEMUSAGE_NOTIFY_MAIL': ['jzamora_5@yahoo.com'],
        'ROBOTSTXT_OBEY': True,
        'USER_AGENT': 'JhoanZamora',
        'FEED_EXPORT_ENCODING': 'utf-8'
    }

    def parse_only_quotes(self, response, **kwargs):
        print('*' * 10)
        print(kwargs)
        print('*' * 10)
        if kwargs:
            quotes = kwargs['quotes']
            authors = kwargs['authors']

        quotes.extend(response.xpath(
            '//span[@class="text" and @itemprop="text"]/text()').getall())

        authors.extend(response.xpath(
            '//div[@class="quote"]//small[@class="author"]/text()').getall())

        next_page_button_link = response.xpath(
            '//ul[@class="pager"]//li[@class="next"]/a/@href').get()

        if next_page_button_link:
            yield response.follow(next_page_button_link, callback=self.parse_only_quotes, cb_kwargs={'quotes': quotes, 'authors': authors})
        else:
            yield {
                'quotes': quotes,
                'authors': authors
            }

    def parse(self, response):

        title = response.xpath('//h1/a/text()').get()

        quotes = response.xpath(
            '//span[@class="text" and @itemprop="text"]/text()').getall()

        authors = response.xpath(
            '//div[@class="quote"]//small[@class="author"]/text()').getall()

        top_tags = response.xpath(
            '//div[contains(@class, "tags-box")]//span[@class="tag-item"]/a/text()').getall()

        top = getattr(self, 'top', None)

        if top:
            top = int(top)
            top_tags = top_tags[:top]

        yield {
            'title': title,
            'top_tags': top_tags
        }

        next_page_button_link = response.xpath(
            '//ul[@class="pager"]//li[@class="next"]/a/@href').get()

        if next_page_button_link:
            yield response.follow(next_page_button_link, callback=self.parse_only_quotes, cb_kwargs={'quotes': quotes, 'authors': authors})
