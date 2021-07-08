import asyncio
import Discord



client = commands.Bot(command_prefix='$')

@client.event
async def on_ready():
    print('BOT ONLINE - Olá Mundo!')
    print(client.user.name)
    print(client.user.id)
    print('--------PR-------')

@client.event
async def on_message(message):
        print('Message from {0.author}: {0.content}'.format(message))
        p = '{0.author}'.format(message)
        p= p.split('#')
        p = p[1]
        mention = message.author.mention
        response = f"eae argentino{mention}"
        if p == '4781':
            print(client.get_user)
            await message.channel.send(response)
            
client.run('ODYyNDc5MTIwMTA5MDEwOTU1.YOY8Rg.3Y_vtXw4XumFl4Yna2OiLTgvDGw')