class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :recipe_link
      t.string :image_link

      t.timestamps
    end
  end
end
