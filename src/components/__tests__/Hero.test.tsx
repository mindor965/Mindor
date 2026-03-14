import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Hero from '../Hero'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileHover, whileTap, initial, animate, transition, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, initial, animate, transition, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, initial, animate, transition, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, whileHover, whileTap, onClick, ...props }: any) => <button onClick={onClick} {...props}>{children}</button>,
    a: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}))

// Wrapper component to provide router context
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Hero Component', () => {
  it('renders without crashing', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    expect(screen.getByText(/Transform Your Business/i)).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Transform Your Business with Digital Innovation')
  })

  it('displays the subtitle text', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    expect(screen.getByText(/Partner with Mindor Tech/i)).toBeInTheDocument()
    expect(screen.getByText(/cutting-edge technology solutions/i)).toBeInTheDocument()
  })

  it('renders the "Explore Services" button', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    const exploreButton = screen.getByRole('link', { name: /explore services/i })
    expect(exploreButton).toBeInTheDocument()
    expect(exploreButton).toHaveAttribute('href', '/services')
  })

  it('renders the "Schedule Strategy Call" button', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    const scheduleButton = screen.getByRole('button', { name: /schedule strategy call/i })
    expect(scheduleButton).toBeInTheDocument()
  })

  it('calls scrollToSection when "Schedule Strategy Call" button is clicked', async () => {
    const mockScrollToSection = vi.fn()
    const user = userEvent.setup()
    
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    const scheduleButton = screen.getByRole('button', { name: /schedule strategy call/i })
    await user.click(scheduleButton)
    
    expect(mockScrollToSection).toHaveBeenCalledWith('contact')
  })

  it('has the correct section ID', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    const section = document.querySelector('#home')
    expect(section).toHaveAttribute('id', 'home')
  })

  it('applies correct CSS classes', () => {
    const mockScrollToSection = vi.fn()
    renderWithRouter(<Hero scrollToSection={mockScrollToSection} />)
    
    const section = document.querySelector('#home')
    expect(section).toHaveClass('relative', 'min-h-screen', 'flex', 'items-center', 'justify-center')
  })
}) 