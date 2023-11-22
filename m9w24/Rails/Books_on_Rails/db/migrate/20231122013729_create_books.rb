class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :publisher
      t.integer :page_count
      t.integer :isbn
      t.integer :price
      t.integer :year_of_publication
      t.string :genre
      t.references :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
