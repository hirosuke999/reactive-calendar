class CreateApiEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :api_events do |t|
      t.string :title
      t.date :date
      t.datetime :start_time
      t.datetime :finish_time

      t.timestamps
    end
  end
end
