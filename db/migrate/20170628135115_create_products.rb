class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.decimal :revenue, precision: 15, scale: 2, default: 0
      t.integer :months

      t.timestamps
    end
  end
end
