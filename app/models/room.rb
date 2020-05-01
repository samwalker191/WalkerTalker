class Room < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :messages,
        foreign_key: :room_id,
        class_name: :Message

    has_many :messengers,
        through: :messages,
        source: :author

    has_many :memberships,
        foreign_key: :room_id,
        class_name: :RoomMembership

    has_many :members,
        through: :memberships,
        source: :user
end
