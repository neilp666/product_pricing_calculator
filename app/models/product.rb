class Product < ApplicationRecord

  validates :revenue, numericality: true,  presence: true
  validates :months, numericality: true, presence: true

  def monthly_amount
    revenue / months
  end

  def daily_amount
    revenue / months / 30
  end

  def create_and_sell_product_10000
    revenue / 10000
  end

  def create_and_sell_product_5000
    revenue / 5000
  end

  def create_and_sell_product_2000
    revenue / 2000
  end

  def create_and_sell_product_1000
    revenue / 1000
  end

  def create_and_sell_product_100
    revenue / 100
  end

  def monthly_subscription_5000
    (revenue / 5000) / months
  end

  def monthly_subscription_2000
    (revenue / 2000) / months
  end

  def monthly_subscription_1000
    (revenue / 1000) / months
  end

  def monthly_subscription_500
    (revenue / 500) / months
  end

  def monthly_subscription_300
    (revenue / 300) / months
  end
end
